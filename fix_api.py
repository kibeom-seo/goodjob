
import os
import glob

files = glob.glob('apps/web/app/api/**/*.ts', recursive=True)

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        code = f.read()
    
    # Ensure export const runtime = 'edge';
    if 'export const runtime = \\'edge\\';' not in code:
        code += '\\nexport const runtime = \\'edge\\';\\n'
    
    # Replace calls to db.ts functions with await
    # the functions are: queryActiveJobs, getAtsFunnelAnalytics, executeCreditTransaction, executeB2BPaymentOrder, getB2BOrders, updateApplicationStage
    funcs = ['queryActiveJobs', 'getAtsFunnelAnalytics', 'executeCreditTransaction', 'executeB2BPaymentOrder', 'getB2BOrders', 'updateApplicationStage']
    for func in funcs:
        code = code.replace(f'{func}(', f'await {func}(')
        # Fix double await if already there
        code = code.replace(f'await await {func}(', f'await {func}(')
        # Fix const db = getDb(); await execute... wait, getDb is not async.

    # Fix getDb() calls in API routes directly (if any)
    code = code.replace('const db = getDb();', 'const db = getDb(); if (!db) return NextResponse.json({error: \\'DB not configured\\'}, {status:500});')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(code)

