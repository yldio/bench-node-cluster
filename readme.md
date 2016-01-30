## What is this?

This is set of ansible scripts and assets that automates benchmarking of nginx,
haproxy and the cluster module as a host-local load balancing solution.

## Prerequisites

- ansible 2.0 or above
- `dopy` (use **pip** to install)
- Digital Ocean access token

## Usage

### 1. Create instances

1. Create a directory `.secret`
2. Create a text file `.secret/dotoken` with a Digital Ocean access token
3. Use `ssh-keygen` to generate a `id_rsa` and `id_rsa.pub` pair in `.secret/` or edit `ansible.cfg` to change the ssh key.
4. Run `ansible-playbook tasks/create-droplets.yml`

### 2. Run tests

1. Edit `vars.yml`
2. Run `ansible-playbook tasks/main.yml`
3. Run `results/print.sh` to check the results

Optionally, use `ansible-playbook tasks/main.yml --tags haproxy` to run just against haproxy, other allowed values are `single`, `cluster` and `nginx`.

### 3. Clean up

1. Run `ansible-playbook tasks/destroy-droplets.yml`

