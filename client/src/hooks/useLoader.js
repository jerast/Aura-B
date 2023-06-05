import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  onLoadEnds,
  startGetShoppingCart,
  startLoadingCategories,
  startLoadingProducts,
  startVerifyingSession
} from '@/store'
import { setLastPath } from '@/helpers'

export const useLoader = () => {
  const { user } = useSelector((state) => state.session)
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const handleLoadingData = async () => {
    await dispatch(startVerifyingSession())
    await dispatch(startLoadingProducts())
    await dispatch(startLoadingCategories())
    await dispatch(startGetShoppingCart())
    dispatch(onLoadEnds())
  }

  useEffect(() => {
    handleLoadingData()
  }, [])

  setLastPath()

  return { user, pathname }
}
