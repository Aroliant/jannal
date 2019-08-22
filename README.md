 DNS Server in Node.js

Node-named is a lightweight DNS server written in pure javascript. It has
limited support for the DNS spec, but aims to implement all of the *common*
functionality that is in use today. 

This project is a part of Blaz intented to provide a simple DNS solution. This is actually a fork of [node-named](https://github.com/trevoro/node-named)

### Supported Records

- A
- AAAA
- MX
- CNAME
- NS
- SOA


### Features
- Regional based Records
- Secondary DNS ( Hosted Server )


### TODO

 * Better record validation
 * Create DNS client for query recursor
 * Add support for PTR records
 * Add support for TCP AXFR requests
