
// props.albums is een array van (100) objects met elk de properties userId, id en title.
// met .map wordt een functie aangeroepen, met album als placeholder/argument, die de props.albums array verandert in het JSX-element li
// als key-prop wordt de value van id property in het album object megegeven aan dit element
// de body wordt vormgegeven door de value van de title property van het album object.
// hiermee is props.alxbums omgezet van een array in een object die middels de key={albums.id}
// die de albumtitels (xvalues van album.title) rendert

import * as React from 'react'
// import { Link } from 'react-router-dom'

export default function AlbumsList(props) {
  return (<div>
    <h1>All Albums</h1>

    <ul>
     { props.albums.map(album => <li key={album.id}>{ album.title }</li>) }
    </ul>
  </div>)
}
