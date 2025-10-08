const KEY = 'heroapphub8_installed';

export function getInstalledIds() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveInstalledIds(ids = []) {
  localStorage.setItem(KEY, JSON.stringify(ids));
}

export function isInstalled(id) {
  return getInstalledIds().includes(id);
}

export function installApp(id) {
  const ids = getInstalledIds();
  if (!ids.includes(id)) {
    ids.push(id);
    saveInstalledIds(ids);
    return true;
  }
  return false;
}

export function uninstallApp(id) {
  const ids = getInstalledIds().filter(i => i !== id);
  saveInstalledIds(ids);
  return ids;
}
