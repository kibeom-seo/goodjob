from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import List, Optional
import urllib.robotparser
import yaml
import time
import os

@dataclass
class RawJobDto:
    source_platform: str
    source_url: str
    company_name_raw: str
    title_raw: str
    location_raw: str
    experience_raw: str
    deadline_raw: str
    salary_raw: Optional[str] = "회사내규에 따름"
    crawled_at: float = 0.0

    def __post_init__(self):
        if not self.crawled_at:
            self.crawled_at = time.time()

class BaseScraper(ABC):
    def __init__(self, config_path: str, base_domain: str):
        self.config_path = config_path
        self.base_domain = base_domain
        self.config = self._load_config()
        self.robot_parser = urllib.robotparser.RobotFileParser()
        self._init_robots_txt()

    def _load_config(self) -> dict:
        if not os.path.exists(self.config_path):
            raise FileNotFoundError(f"Selector config not found: {self.config_path}")
        with open(self.config_path, "r", encoding="utf-8") as f:
            return yaml.safe_load(f)

    def reload_config(self):
        self.config = self._load_config()

    def _init_robots_txt(self):
        try:
            robots_url = f"{self.base_domain.rstrip('/')}/robots.txt"
            self.robot_parser.set_url(robots_url)
            self.robot_parser.read()
        except Exception:
            pass

    def is_allowed_by_robots(self, target_url: str, user_agent: str = "*") -> bool:
        try:
            return self.robot_parser.can_fetch(user_agent, target_url)
        except Exception:
            return True

    def sleep_delay(self):
        delay = self.config.get("request_delay_seconds", 1.0)
        time.sleep(delay)

    @abstractmethod
    def fetch_job_list(self, page: int = 1) -> List[RawJobDto]:
        pass
