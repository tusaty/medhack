#!/usr/bin/env bash

target_host="bessos@hercules"

# comment this in case data injestion phase is needed
# export enable_injest='--injest'

cd ../..
rm -f medhack_back.tar.gz
tar czf medhack_back.tar.gz medhack/public medhack/rest medhack/app.js medhack/environment.conf medhack/package.json

scp medhack_back.tar.gz ${target_host}:~
yes | rm medhack_back.tar.gz
ssh ${target_host} << EOF
    pwd
    cd ~
    rm -rf medhack/
    tar xzf medhack_back.tar.gz
    yes | rm medhack_back.tar.gz
    cd ~/medhack/
    #npm install
    pkill node
    node app
EOF
