sudo ss -tulnp | grep 9090

sudo find / -name "Caddyfile"


ubuntu@VM-0-17-ubuntu:~/webs$ pkill -9 -f node
ubuntu@VM-0-17-ubuntu:~/webs$ sleep 2
ubuntu@VM-0-17-ubuntu:~/webs$ rm -rf .next
ubuntu@VM-0-17-ubuntu:~/webs$ find . -name "lock" -type f
ubuntu@VM-0-17-ubuntu:~/webs$ npm run build


在 Ubuntu 系统中，Caddy 的默认配置文件路径通常位于 /etc/caddy/Caddyfile。

你可以通过以下几种方式确认或查找具体的配置文件路径：

检查默认路径
这是最常见的默认位置，你可以直接查看该文件是否存在：
ls -l /etc/caddy/Caddyfile

查看启动命令或系统服务配置
如果默认路径不存在，或者你是通过特定方式启动的，配置文件可能在其他位置。

查看 Systemd 服务配置（如果你是用 systemctl 管理的）：
        systemctl status caddy
    
    或者查看服务详情：
        systemctl cat caddy
    
    在输出中寻找 --config 参数，它会指向具体的配置文件路径。

查看运行中的进程：
    如果你是通过命令行后台启动的，可以用 ps 命令查看：
        ps aux | grep caddy
    
    如果启动时指定了配置文件（例如 caddy run --config /path/to/Caddyfile），你会在这里看到完整路径。

全局搜索
如果你在以上位置都没找到，可以使用 find 命令全盘搜索名为 Caddyfile 的文件：
sudo find / -name "Caddyfile"

💡 补充说明
配置文件名称：Caddy 的配置文件通常命名为 Caddyfile，且没有后缀名。
Docker 环境：如果你是使用 Docker 运行 Caddy，配置文件通常挂载在容器内的 /etc/caddy/Caddyfile，或者通过启动命令指定。