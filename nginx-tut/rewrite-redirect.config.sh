#!/usr/bin/env bash
#!/usr/bin/env bash
events {}

http {
    server {
        listen 80;
        server_name www.majom.hu majom.hu;

        root /sites/demo;
        # rewrite creates a new url and so it lets nginx reevaluate it from the top of its server block
        # it takes more system resources
        # $1: pattern $2 rewrite it to what
        # with last as $3 the new url will not be allowed to be re written anymore
        rewrite ^/user/(\d+).* /greet/$1;

        location /greet/ {
            return 200 "$uri\nyeah it works";
        }

        location /redirect {
            # $1 statuscode $2 redirect link
            return 307 /user/1234;
        }
    }
}