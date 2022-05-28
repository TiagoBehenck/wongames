/* eslint-disable @typescript-eslint/no-explicit-any */
import { ItemProps } from 'components/ExploreSidebar'
import { ParsedUrlQueryInput } from 'node:querystring'

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: Pick<ItemProps, 'type' | 'name'>[]
}

export const parseQueryStringToWhere = ({
  queryString,
  filterItems
}: ParseArgs) => {
  const obj: any = {}

  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .map((key) => {
      const item = filterItems?.find((item) => item.name === key)
      const isCheckBox = item?.type === 'checkbox'

      obj[key] = isCheckBox
        ? { name_contains: queryString[key] }
        : queryString[key]
    })

  return obj
}

export const parseQueryStringToFilter = ({
  queryString,
  filterItems
}: ParseArgs) => {
  const obj: any = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((item) => item.name === key)
    const isCheckBox = item?.type === 'checkbox'
    const isArray = Array.isArray(queryString[key])

    obj[key] = !isArray && isCheckBox ? [queryString[key]] : queryString[key]
  })

  return obj
}
