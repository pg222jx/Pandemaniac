import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme'
import  { FirstStationContext, FirstStationProvider } from '../components/Contexts/stationContexts/FirstStationContext'
import  { SecondStationContext, SecondStationProvider } from '../components/Contexts/stationContexts/SecondStationContext'
import  { ThirdStationContext, ThirdStationProvider } from '../components/Contexts/stationContexts/ThirdStationContext'
import  { FourthStationContext, FourthStationProvider } from '../components/Contexts/stationContexts/FourthStationContext'
import  { FifthStationContext, FifthStationProvider } from '../components/Contexts/stationContexts/FifthStationContext'
import  { SixthStationContext, SixthStationProvider } from '../components/Contexts/stationContexts/SixthStationContext'
import Stations from '../components/Stations'

function renderStations(firstPosition, setFirstPosition, secondPosition, setSecondPosition, thirdPosition, setThirdPosition,
  fourthPosition, setFourthPosition, fifthPosition, setFifthPosition, sixthPosition, setSixthPosition) {
    return render(
      <FirstStationContext.Provider value={[firstPosition, setFirstPosition]}>
        <SecondStationContext.Provider value={[secondPosition, setSecondPosition]}>
            <ThirdStationContext.Provider value={[thirdPosition, setThirdPosition]}>
                <FourthStationContext.Provider value={[fourthPosition, setFourthPosition]}>
                    <FifthStationContext.Provider value={[fifthPosition, setFifthPosition]}>
                        <SixthStationContext.Provider value={[sixthPosition, setSixthPosition]}>
                            <Stations />
                        </SixthStationContext.Provider>
                    </FifthStationContext.Provider>
                </FourthStationContext.Provider>
            </ThirdStationContext.Provider>
        </SecondStationContext.Provider>
      </FirstStationContext.Provider>
    )
  }

  const wrapperShallow = shallow(
    <FirstStationProvider>
    <SecondStationProvider>
        <ThirdStationProvider>
            <FourthStationProvider>
                <FifthStationProvider>
                    <SixthStationProvider>
                        <Stations />
                    </SixthStationProvider>
                </FifthStationProvider>
            </FourthStationProvider>
        </ThirdStationProvider>
    </SecondStationProvider>
  </FirstStationProvider>
)

const wrapperMount = mount(
  <FirstStationProvider>
  <SecondStationProvider>
      <ThirdStationProvider>
          <FourthStationProvider>
              <FifthStationProvider>
                  <SixthStationProvider>
                      <Stations />
                  </SixthStationProvider>
              </FifthStationProvider>
          </FourthStationProvider>
      </ThirdStationProvider>
  </SecondStationProvider>
</FirstStationProvider>
)

describe('Testing the Stations component', () => {
  it('should match the snapshot', () => {
      expect(wrapperShallow.html()).toMatchSnapshot()
    })

  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <FirstStationProvider>
          <SecondStationProvider>
              <ThirdStationProvider>
                  <FourthStationProvider>
                      <FifthStationProvider>
                          <SixthStationProvider>
                              <Stations />
                          </SixthStationProvider>
                      </FifthStationProvider>
                  </FourthStationProvider>
              </ThirdStationProvider>
          </SecondStationProvider>
      </FirstStationProvider>, div
    )
  })

  it('should have 6 images with classname station', () => {
    expect(wrapperMount.find('img.station').length).toEqual(6)
  })

  test('so FirstStationContext will set position', () => {
    const position = {bottom: '380px', left: '120px'}
    renderStations(position)
    expect(screen.getByAltText('Science station for North America').style.bottom).toEqual('380px')
    expect(screen.getByAltText('Science station for North America').style.left).toEqual('120px')
  })

  test('so SecondStationContext will set position', () => {
    const position = {bottom: '380px', left: '120px'}
    renderStations(null, null, position)
    expect(screen.getByAltText('Science station for South America').style.bottom).toEqual('380px')
    expect(screen.getByAltText('Science station for South America').style.left).toEqual('120px')
  })

  test('so ThirdStationContext will set position', () => {
    const position = {bottom: '380px', left: '120px'}
    renderStations(null, null, null, null, position)
    expect(screen.getByAltText('Science station for Africa').style.bottom).toEqual('380px')
    expect(screen.getByAltText('Science station for Africa').style.left).toEqual('120px')
  })

  test('so FourthStationContext will set position', () => {
    const position = {bottom: '380px', left: '120px'}
    renderStations(null, null, null, null, null, null, position)
    expect(screen.getByAltText('Science station for Europe').style.bottom).toEqual('380px')
    expect(screen.getByAltText('Science station for Europe').style.left).toEqual('120px')
  })

  test('so FifthStationContext will set position', () => {
    const position = {bottom: '380px', left: '120px'}
    renderStations(null, null, null, null, null, null, null, null, position)
    expect(screen.getByAltText('Science station for Asia').style.bottom).toEqual('380px')
    expect(screen.getByAltText('Science station for Asia').style.left).toEqual('120px')
  })

  test('so SixthStationContext will set position', () => {
    const position = {bottom: '380px', left: '120px'}
    renderStations(null, null, null, null, null, null, null, null, null, null, position)
    expect(screen.getByAltText('Science station for Australia').style.bottom).toEqual('380px')
    expect(screen.getByAltText('Science station for Australia').style.left).toEqual('120px')
  })
})