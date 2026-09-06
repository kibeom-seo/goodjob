const token = 'cfoat_9ewdtpLZyugOwV-XCB2VGz_JTB2JCpkv91-4lTCtFM8.qQTn_NIValpV64xEcyLOccljLh29Sy_5pDu_DKuJniw';
const accountId = '8c647734ccef451db23cb76c0b49497f';

async function run() {
  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/goodjob`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const data = await res.json();
  console.log('Project fetch success:', data.success);
  if (data.result) {
    console.log('Production deployment_configs:', JSON.stringify(data.result.deployment_configs?.production, null, 2));
  } else {
    console.log(data);
  }
}

run();
