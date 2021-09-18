import React from 'react'
import {Button} from 'semantic-ui-react'
import '../styles/displayt-heroes.css'
import {Heroes} from "../heroes/Heroes"

export enum ImageSize {
  SMALL = '_sb.png',
  MEDIUM = '_lg.png',
  FULL = '_full.png',
  VERT = '_vert.jpg'
}

export const HeroImageUrl = (heroName: string , size: ImageSize) => {
  return `http://cdn.dota2.com/apps/dota2/images/heroes/${heroName.toLowerCase()}${size}`
}

export const HeroesDisplay = () => {

  const renderHeroes = () => {
    return Heroes.map( hero => <Button content={<img src={HeroImageUrl(hero.name, ImageSize.SMALL)} alt={''}/>}/>)
  }

  return (
    <div className={'dota-duos-home-container'}>
      <div className={'display-heroes-container'}>
        {renderHeroes()}
      </div>
    </div>
  )
}
