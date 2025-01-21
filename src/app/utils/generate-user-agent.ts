export function generateRandomUserAgent() {
  const browsers: string[] = ['Chrome', 'Firefox', 'Safari', 'Opera', 'Edge'];
  const os: string[] = ['Windows NT 10.0', 'Macintosh; Intel Mac OS X 10_15_7', 'X11; Linux x86_64', 'iPhone; CPU iPhone OS 14_0 like Mac OS X', 'Android 10'];

  const browser: string = getRandomElement(browsers);
  const operatingSystem: string = getRandomElement(os);

  let userAgent = '';

  switch (browser) {
    case 'Chrome':
      userAgent = `Mozilla/5.0 (${operatingSystem}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(Math.random() * 100)}.0.${Math.floor(Math.random() * 10000)}.0 Safari/537.36`
      break
    case 'Firefox':
      userAgent = `Mozilla/5.0 (${operatingSystem}; rv:${Math.floor(Math.random() * 100)}.0) Gecko/20100101 Firefox/${Math.floor(Math.random() * 100)}.0`
      break
    case 'Safari':
      userAgent = `Mozilla/5.0 (${operatingSystem}) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${Math.floor(Math.random() * 15)}.0 Safari/605.1.15`
      break
    case 'Opera':
      userAgent = `Mozilla/5.0 (${operatingSystem}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(Math.random() * 100)}.0.${Math.floor(Math.random() * 10000)}.0 Safari/537.36 OPR/${Math.floor(Math.random() * 100)}.0.0.0`
      break
    case 'Edge':
      userAgent = `Mozilla/5.0 (${operatingSystem}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(Math.random() * 100)}.0.${Math.floor(Math.random() * 10000)}.0 Safari/537.36 Edg/${Math.floor(Math.random() * 100)}.0.0.0`
      break
  }

  return userAgent;
}

function getRandomElement(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)]
}
