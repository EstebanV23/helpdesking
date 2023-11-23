import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Style from './ticketsTableSk.module.css'

const SkeletonRow = () => (
  <tr>
    <td><Skeleton height={60} /></td>
    <td><Skeleton height={60} /></td>
    <td><Skeleton height={60} /></td>
    <td><Skeleton height={60} /></td>
  </tr>
)

export default function TicketsTableSk () {
  return (
    <div>
      <table className={Style.table}>
        <thead>
          <tr>
            <th><Skeleton height={22} /></th>
            <th><Skeleton height={22} /></th>
            <th><Skeleton height={22} /></th>
            <th><Skeleton height={22} /></th>
          </tr>
        </thead>
        <tbody>
          {Array(3).fill(0).map((_, i) => SkeletonRow())}
        </tbody>
      </table>
    </div>
  )
}
