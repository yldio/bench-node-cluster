#!/bin/bash

function check {
  echo -e "$1 - $(ls -l results/$1.txt | awk '{print $8, $6, $7}')"
  echo -e "RPS: $(grep Requests < results/$1.txt | awk '{print $2}')"
  echo ""
}

check single
check cluster
check haproxy
check nginx

