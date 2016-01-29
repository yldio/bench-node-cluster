## What is this?

This is set of ansible scripts and assets that automates benchmarking of nginx,
haproxy and the cluster module as a host-local load balancing solution.

## Usage

Prerequisites:

- ansible installed on your local machine
- root access to a 4 CPU host

Open `ansible/all.yml` and configure variables, then run with:

```
$ ansible-playbook -i '<target-ip>,' ansible/all.yml
```

After the first run you can use tags to run only specific benchmarks:

```
$ ansible-playbook -i '<target-ip>,' ansible/all.yml --tags nginx
```

Display results:

```
$ ./print-results.sh
```

## TODO

- Generate load from a separate machine using private networking
- Add iptables or LVS

