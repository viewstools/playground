import HoveredManual from './HoveredManual.view.js'
import React from 'react'
import useHoveredManual from 'useHoveredManual.js'

export default function HoveredManualLogic() {
  let hoveredManual = useHoveredManual()

  return <HoveredManual {...hoveredManual} />
}
