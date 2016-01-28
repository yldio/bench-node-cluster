#!/bin/bash

function check {
  echo -e "$1: $(grep Requests < results/$1.txt | awk '{print $2}')"
}

check single
check cluster
check nginx
check haproxy

