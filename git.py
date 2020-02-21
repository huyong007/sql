import subprocess
import re
subprocess.call(['git', 'init'])
subprocess.call(['git', 'add', '-A'])


def iput_commit_tag():
    commit_tag = input('填写本次提交的特性标签:\n ')
    if commit_tag.strip() == '':
        print('特性的标签不能为空')
        return iput_commit_tag()
    else:
        return commit_tag


commit_tag = iput_commit_tag()
subprocess.call(['git', 'commit', '-m', str(commit_tag)])
# 获取当前分支名
now_branch = subprocess.check_output(
    ['git', 'symbolic-ref', '--short', '-q', 'HEAD'])
new_now_branch = re.findall(r'\S', now_branch.decode('utf-8'))

branch = ''.join(new_now_branch)
print('now is on ' + branch, ' branch')

# 对当前更改执行pull和push操作
subprocess.call(['git', 'pull', 'origin', branch])
subprocess.call(
    ['git', 'push', 'origin', branch])
# 如果是主分支就执行编译
# if new_now_branch == 'master':
#     subprocess.call(['npm', 'run', 'build:prod'])
# else:
#     pass
