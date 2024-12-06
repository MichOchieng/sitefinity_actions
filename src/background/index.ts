async function getCurrentTab() {
  const queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

async function pageExists(url: string) {
  const res = await fetch(url, { method: 'HEAD' });

  if (res.status === 404) {
    return false;
  }

  return true;
}

export async function handleEdit() {
  try {
    // Get current tab
    const tab: chrome.tabs.Tab = await getCurrentTab();

    // Check if URL is defined
    if (!tab.url) {
      throw new Error('The current tab does not have a valid URL.');
    }

    // Open new tab with new URL
    const newUrl = tab.url.concat('/action/edit');

    // Check to see if that page exists
    if (await pageExists(newUrl)) {
      chrome.tabs.create({ url: newUrl });
    } else {
      throw new Error(`Cannot access page at ${newUrl}`);
    }
  } catch (error) {
    console.error('An error occurred while handling edit:', error);

    alert("Oops, can't edit this page!");
  }
}

export async function handlePreview() {
  try {
    // Get current tab
    const tab: chrome.tabs.Tab = await getCurrentTab();

    // Check if URL is defined
    if (!tab.url) {
      throw new Error('The current tab does not have a valid URL.');
    }

    // Open new tab with new URL
    const newUrl = tab.url.concat('/action/preview');

    // Check to see if that page exists
    if (await pageExists(newUrl)) {
      chrome.tabs.create({ url: newUrl });
    } else {
      throw new Error(`Cannot access page at ${newUrl}`);
    }
  } catch (error) {
    console.error('An error occurred while handling edit:', error);

    alert("Oops, can't preview this page!");
  }
}
