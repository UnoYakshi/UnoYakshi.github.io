+++
title = "On E-mail Providers"
subtitle = "Why did I choose Posteo?"
tags = ["PSA", "email", "comparison"]
date = 2025-02-26
draft = false
author = "Uno Yakshi"

[extra]
toc = true
toc_sidebar = true
disclaimer = """
1. Do not treat this page as a viable source in your own threat modeling. \
2. There will be no full explanation for the used abbreviations.
"""
+++

# TL&DR
I decided to use [Posteo](https://posteo.de/en/) as a email-provider as it:
- allows to setup OpenPGP and S/MIME
- does most of the hard work for me
- has a neat reputation in <abbr title="Privacy ― Security ― Anonymity">PSA</abbr> world
- costs 1 €/month (and accepts cash)
- somewhat cares about ecology

# Intro
I've spent quite some time {{ sidenote(uid="time-spent", body="Ca. a full-time week.", inline=true) }} to compare several options when 
it came to email.{% sidenote(uid="self-hosted", inline=true) %}
I've also considered running my own instance. Probably [Mailcow](https://mailcow.email/) or [Stalwart](https://stalw.art/).
{% end %}
Unfortunately, I'm not going to describe all the comparisons here, not as of now at least.
However, I will gladly share my key takeaways and reasoning [for choosing Posteo].

# Reasons
If in 2025+ some people are still in doubt,
I'm but to provide a few reasons why you should choose an email provider <abbr title="if and only if">iff</abbr>:
- your infrastructural scale doesn't really scream for your own thing
- your threat model allows it 
  - and your tech savviness allows you can set up all the public-private-certificate shebang
- you are lazy and mortal

## Time
The first reason I even considered email service providers is time itself.
If I've spent a week just to compare 10+ services and tools, how much would it take to correctly setting it up?
Would there be no such services at all if it'd be so easy support one?
In case you are a single individual (or a small team/family), you are better to go with a provider.
I mean, most people already do it with Gmail, MS Outlook, Yahoo, Baidu, etc.
The only difference is, alas, that they don't care PSA.

## Complexity
Speaking of "easy", it's not. Neither it's simple. There are a number of aspects you need to consider.
For example:
- have a reliable hosting [in data-center] or take care of your own infrastructure with 99.999+% availability
- correctly setup all the policies:
<abbr title="Sender Policy Framework">SPF</abbr>, 
<abbr title="DomainKeys Identified Mail">DKIM</abbr>,
<abbr title="DNS-based Authentication of Named Entities">DANE</abbr>,
<abbr title="Domain-based Message Authentication Reporting & Conformance">DMARC</abbr>
- correctly setup <abbr title="End-to-End Encryption">E2EE</abbr>: 
[Open]<abbr title="Pretty Good Privacy">PGP</abbr>,
<abbr title="Secure/Multipurpose Internet Mail Extension">S/MIME</abbr>, etc.
- spam filter
  - else you'll end up in a heap of useless data
  - and lose your storage space to it
- malware filter {{ sidenote(uid="" inline=true body="Or are you going to force users to look at plain text?") }}
  - ads such as Facebook Pixel, Google Tag Manager, Yandex Counter, etc.
  - phishing links
  - executable attachments
  - LLM jailbreaking
- backups! {% sidenote(uid="backups-rule", inline=true) %} 
Remember the [3-2-1 rule](https://www.seagate.com/gb/en/blog/what-is-a-3-2-1-backup-strategy/):
- 3 data copies
- 2 types of storage/media
- 1 offsite location
{% end %}


# On Posteo
I've been reading Reddit, PrivacyGuides' discussions, PrivacyTools, LLMs, marketing slogans, and trusting my own intuition ― 
and after careful and a bit stressful consideration, I've decided to stay on Posteo.

## Pros
- it provides necessary level of privacy and anonymity [for me]
- it utilizes Open Source solutions, including OpenPGP
- it is [recommended](https://www.fsf.org/resources/webmail-systems) by <abbr title="Free Software Foundation">FSF</abbr>, alongside RiseUp and A/I
{% sidenote(uid="political-services", inline=true) %}
Those two will work even w/o JS.
But will also raise suspicions for state-funded adversaries, if you use them too openly like IT-work or purchases.
It's a different beast.

P.S. I do not possess an invitation code for RiseUp.
{% end %}
- it's 'all green' as in no real red flags + ecology-wise
  - [Internet.NL shows 83%](https://internet.nl/mail/posteo.de/1455134/) (issues: none for DMARC and IPv6 unavailable)
- it's really cheap

## No Custom Domain?!
The first drawback I've noticed (just right after paying for the service) that there is no support for custom domain.
It was odd, even considering it's just 1 euro/month. A few questions came to my mind nearly in an instant.

1. Why would a commercial company refuse an extra ~~buck~~euro?
2. How will I look in the IT/business community with `<username>@posteo.de` near my commits?
3. How long will it take till I get my money back? Or should I even revoke my account?
4. Is it a lacking feature, or is it by-design? Why? WHY the Force not?

Long story short, it is problematic to keep the same level of privacy and security for custom domains.
If you really need to set up your custom domain, you can still automatically forward.
Check out [Andy's post](https://andyleejordan.com/posts/posteo/) on it!

Towards answering the questions.
1. It would require extra work and doesn't add up to Posteo's goals.
2. Like a person who made a well-weighted decision despite the "tradition". Not to mention switching from `@gmail.com`.
3. It's about 180 days, according to Posteo. But I'm not going to revoke my account.
4. By design. Domains are usually purchased for a real (as in personal data) entity, with names, phones, and IDs.
If your email service support custom domains, it is a link to your physical (vs. virtual) identity.
Hence, it could help to compromise you.

## DMARC Policy `none`?!
Another aspect worried me.
Their DMARC policy is set to `none` instead of `reject` or `quarantine`.
That was until I, firstly, understood it's unlikely for someone to spoof my username.
{% sidenote(uid="spoof-email") %}
1. I'm not a company, I represent myself. There is no real benefit* of faking my personal-work address.
2. SPF and DKIM still work, so it's double unlikely to spoof my account.
{% end %}
And, secondly, setting more strict DMARC can cause issues for forwarded, alias, and receiving emails alike.

Apparently, it is not a must to set DMARC for all email providers, [says dmarc.org](https://dmarc.org/wiki/FAQ#Why_doesn.27t_.28major_mailbox_provider.29_publish_a_DMARC_record.3F).

If I'm not going to receive or send any emails on my domain, then I will just [set DNS records accordingly](https://www.cloudflare.com/learning/dns/dns-records/protect-domains-without-email/).

# Services List
- ProtonMail ― a default choice if you don't really want to get into PSA too much.
  - supports PGP instead of OpenPGP
  - custom domains
  - E2EE email body and attachments ― doesn't encrypt Subject line
    - I guess they don't encrypt meta-data as well
- [Tuta](https://tuta.com/) (ex Tutanota) ― another namely Germany-based email provider
  - I couldn't Sign Up with my browser setup
![img.png](tuta_signup_fail.png)
- [CounterMail](https://countermail.com/) ― super-~~paranoid~~aware
{% sidenote(uid="cm", inline=true) %}
They even store the encrypted data on CDs instead of HDDs.
{% end %}(I love it!)
and kind of pricey (to me), but I don't have an invitation code.
They still have [a bunch of useful tool](https://webmail.countermail.com/tools/tools.html) in the open.
- Mailfence
- Startmail
