"use client";

const STORAGE_KEY = "parabrahman:lesson-progress:v1";
const CHANGE_EVENT = "parabrahman-progress-change";

export function getProgressSnapshot() {
  if (typeof window === "undefined") return "[]";
  return window.localStorage.getItem(STORAGE_KEY) ?? "[]";
}

export function getServerProgressSnapshot() {
  return "[]";
}

export function subscribeToProgress(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
  };
}

export function readCompletedLessons(snapshot: string): string[] {
  try {
    const value: unknown = JSON.parse(snapshot);
    return Array.isArray(value)
      ? value.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

export function setLessonCompleted(lessonId: string, completed: boolean) {
  const current = new Set(readCompletedLessons(getProgressSnapshot()));

  if (completed) current.add(lessonId);
  else current.delete(lessonId);

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...current]));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}
