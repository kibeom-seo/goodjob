const token = 'cfoat_9ewdtpLZyugOwV-XCB2VGz_JTB2JCpkv91-4lTCtFM8.qQTn_NIValpV64xEcyLOccljLh29Sy_5pDu_DKuJniw';
const accountId = '8c647734ccef451db23cb76c0b49497f';

async function updateProject() {
  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/goodjob`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      deployment_configs: {
        production: {
          compatibility_date: '2024-11-11',
          compatibility_flags: ['nodejs_compat']
        },
        preview: {
          compatibility_date: '2024-11-11',
          compatibility_flags: ['nodejs_compat']
        }
      }
    })
  });
  const data = await res.json();
  console.log('Update success:', data.success);
  console.log('Result:', JSON.stringify(data.result?.deployment_configs, null, 2));
}

updateProject();
