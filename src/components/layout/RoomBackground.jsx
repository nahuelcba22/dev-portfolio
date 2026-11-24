import { useTheme } from '../../hooks/useTheme'

// Placeholder backdrop: a day sky stacked over a night sky, cross-faded with an
// opacity transition. It is replaced by the video loops in a later PR, which keeps
// the same stacking and fade approach.
export default function RoomBackground() {
  const { isNight } = useTheme()

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-[#0d1020] to-[#2a1f4d]" />
      <div
        className={`absolute inset-0 bg-linear-to-b from-[#7fb4e8] to-[#d8e6f6] transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
          isNight ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {/* Side vignette: keeps panel contrast without covering the center of the screen */}
      <div className="absolute inset-0 bg-linear-to-r from-black/35 via-transparent to-transparent" />
    </div>
  )
}
