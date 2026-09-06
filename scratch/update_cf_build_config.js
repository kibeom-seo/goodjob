const token = 'cfoat_9ewdtpLZyugOwV-XCB2VGz_JTB2JCpkv91-4lTCtFM8.qQTn_NIValpV64xEcyLOccljLh29Sy_5pDu_DKuJniw';
const accountId = '8c647734ccef451db23cb76c0b49497f';

async function fixBuildConfig() {
  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/goodjob`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      build_config: {
        build_command: 'npx @cloudflare/next-on-pages',
        destination_dir: '.vercel/output/static',
        root_dir: 'apps/web'
      }
    })
  });
  const data = await res.json();
  console.log('Update build_config success:', data.success);
  console.log('Updated build_config:', JSON.stringify(data.result?.build_config, null, 2));
}

fixBuildConfig();
