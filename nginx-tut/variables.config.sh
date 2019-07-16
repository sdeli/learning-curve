#!/usr/bin/env bash
events {}

http {
    server {

        listen 80;
        server_name 167.99.93.26;

        root /sites/demo;

        set $mon 'No';

        # Check if weekend
        if ( $date_local ~ 'Monday' ) {
            set $mon 'Yes';
        }

        location =/is_monday {
            return 200 $mon;
        }

        location /has-qs {
            return 200 "$args\n$arg_name\n$hostname\n$host\n$document_root\n$remote_addr\n$uri";
        }
    }
}