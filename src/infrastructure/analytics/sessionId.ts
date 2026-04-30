const SESSION_ID_KEY = "mje_session_id";

function generateSessionId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function getSessionId(): string | null {
  if (typeof window === "undefined") return null;
  let id = sessionStorage.getItem(SESSION_ID_KEY);
  if (!id) {
    id = generateSessionId();
    sessionStorage.setItem(SESSION_ID_KEY, id);
  }
  return id;
}
