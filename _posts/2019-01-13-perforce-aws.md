---
layout: post
title: Perforce Set-Up on AWS EC-2 Ubuntu
excerpt: "In game development area, you probably have heard about Perforce (P4). Being in IT, you have also heard about Amazon's AWS/EC-2. Let us combine those two!"
---

# Instatiating EC-2
Be sure to have all the requirements

Do have Public IP! Check “Auto-assign Public IP" on creating new instance.

# Install Perforce
Add P4’s repository

`wget`

# Download P4
`sudo apt-get install helix-p4d`

# Configure P4
The basic set-up can be done with the suggested 


# Configure Connection
Open TCP port on the instance

Redirect external requests to localhost

`iptables redirect`

# Post-configure P4
Add typemaps

Add ignorelist
