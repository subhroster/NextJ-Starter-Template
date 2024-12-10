import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

// Atom for storing favorite calculator IDs
export const bookmarksAtom = atomWithStorage('favorite_calculators', [] as string[])

// Derived atom for checking if a calculator is bookmarked
export const isBookmarkedAtom = atom(
  (get) => (calculatorId: string) => get(bookmarksAtom).includes(calculatorId)
)

// Action atom for toggling bookmark status
export const toggleBookmarkAtom = atom(
  null,
  (get, set, calculatorId: string) => {
    const bookmarks = get(bookmarksAtom)
    const isBookmarked = bookmarks.includes(calculatorId)
    
    set(bookmarksAtom, 
      isBookmarked
        ? bookmarks.filter(id => id !== calculatorId)
        : [...bookmarks, calculatorId]
    )
  }
)

// Atom for getting all bookmarked calculator details
export const bookmarkedCalculatorsAtom = atom(
  (get) => {
    const bookmarks = get(bookmarksAtom)
    return bookmarks
  }
)
