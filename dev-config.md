## Starting dev server with SSL enabled

1. Defining hosts
   Windows\System32\drivers\etc\hosts

```
::1   test.com
::1   auth-lived.test.com
::1   internal-lived.test.com
::1   public-lived.test.com
```

2. Installint mkcert

```
    npm install mkcert -g
```

3. Creating cerificate (used in steps: 4, 6)

```
   mkcert create-ca
```

4. Creating certificate for domains

```
   mkcert create-cert --domain localhost test.com auth-lived.test.com internal-lived.test.com public-lived.test.com 127.0.0.1 ::1
```

5. Installing and starting proxy

```
   npx local-ssl-proxy --key cert.key --cert cert.crt --source 3001 --target 3000
```

6. Add maded certificate (ca.crt) in browser ([instruction](https://docs.vmware.com/en/VMware-Adapter-for-SAP-Landscape-Management/2.1.0/Installation-and-Administration-Guide-for-VLA-Administrators/GUID-0CED691F-79D3-43A4-B90D-CD97650C13A0.html))

7. Starting dev server

```
   pnpm run dev:auth
```

8. Open browser page:
   https://auth-lived.test.com:3001
