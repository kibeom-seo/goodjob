const fs = require('fs');
const code = fs.readFileSync('apps/web/data/mockJobs.ts', 'utf8');
const match = code.match(/export const MOCK_JOBS: JobPosting\[\] = (\[[\s\S]*?\]);/);
if (!match) throw new Error('Could not parse mockJobs');
const jobs = eval(match[1]);

let sql = '';
for (const job of jobs) {
  const safeStr = (str) => {
    if (str === null || str === undefined) return 'NULL';
    return "'" + String(str).replace(/'/g, "''") + "'";
  };
  sql += `INSERT INTO job_postings (id, company_name, company_logo, corporate_domain, title, experience_level, location, salary, posted_at, deadline_at, deadline_text, deadline_days_left, is_active, is_expired, is_claimed, is_remote, is_flexible_work, is_military_service, is_boosted, summary_mission, summary_requirements, summary_benefits, keyword_highlights) VALUES (${safeStr(job.id)}, ${safeStr(job.companyName)}, ${safeStr(job.companyLogo)}, ${safeStr(job.corporateDomain)}, ${safeStr(job.title)}, ${safeStr(job.experienceLevel)}, ${safeStr(job.location)}, ${safeStr(job.salary)}, ${safeStr(new Date().toISOString())}, ${safeStr(new Date(Date.now() + 86400000 * (job.deadlineDaysLeft || 10)).toISOString())}, ${safeStr(job.deadlineText)}, ${job.deadlineDaysLeft || 10}, 1, 0, 0, 0, 0, 0, 0, ${safeStr(job.companyCategory)}, ${safeStr(job.title)}, '', ${safeStr(JSON.stringify(job.tags || []))});\n`;
}
fs.writeFileSync('seed.sql', sql);
console.log('Created seed.sql with ' + jobs.length + ' inserts.');
