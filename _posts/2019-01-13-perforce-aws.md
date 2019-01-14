---
layout: post
title: Perforce Set-Up on AWS EC-2 Ubuntu
tags:
  - Amazon
  - Perforce
  - back-end
  - tutorial
excerpt: "In game development area, you probably have heard about Perforce (P4). Being in IT, you have also heard about Amazon's AWS/EC-2. Let us combine those two!"
---

This tutorial has been made for Ubuntu, however, you shouldn't have any problems with any other Linux distro if you know P4's repository and method to install it.

# Instatiating EC-2
First of all, be sure to have all the requirements.

We need to have Public IP, otherwise we won't be able to connect from a remote machine. Check “Auto-assign Public IP" on creating new instance.

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
