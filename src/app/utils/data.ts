export const availableRooms = [
  {
    name: '1 bed',
    label: '1 bed'
  },
  {
    name: '2 beds',
    label: '2 beds'
  },
  {
    name: '3 beds',
    label: '3 beds'
  },
  {
    name: '4 beds',
    label: '4 beds'
  }
]

export const availableFacilities = [
  {
    name: 'Air-condition',
    label: 'Air-condition'
  },
  {
    name: 'Wifi',
    label: 'Wifi'
  },
  {
    name: 'DSTV',
    label: 'DSTV'
  },
  {
    name: 'Heater',
    label: 'Heater'
  },
  {
    name: 'CCTV',
    label: 'CCTV'
  },
  {
    name: 'Shuttle Service',
    label: 'Shuttle Service'
  }
]

export const availablePrices = [
  {
    name: 'GH 1,000 - GH 2,000',
    label: 'GH 1,000 - GH 2,000'
  },
  {
    name: 'GH 3,000 - GH 5,000',
    label: 'GH 3,000 - GH 5,000'
  },
  {
    name: 'GH 6,000 - GH 10,000',
    label: 'GH 6,000 - GH 10,000'
  },
  {
    name: 'GH 11,000 - GH 15,000',
    label: 'GH 11,000 - GH 15,000'
  }
]

export const vehicleRatings = [
  {
    id: 'cda403e0-8e2f-11ef-b94a-33bd7cad33be',
    comment: 'Good service 👍 👌 ',
    creator: {
      id: '49faa650-b6a0-11ee-947b-8b53ee25b0d0',
      kind: 'NORMAL_USER',
      name: 'Precious Jahlom Agboado'
    },
    ratings: 4,
    created_at: '2024-10-19 15:35:43.000000',
    updated_at: '2024-10-19 15:35:43.000000'
  },
  {
    id: 'bb12e700-8e2f-11ef-b94a-33bd7cad33be',
    comment: 'Spacious rooms',
    creator: {
      id: '49faa650-b6a0-11ee-947b-8b53ee25b0d0',
      kind: 'NORMAL_USER',
      name: 'Cobby Graves'
    },
    ratings: 5,
    created_at: '2024-10-19 15:35:12.000000',
    updated_at: '2024-10-19 15:35:12.000000'
  }
]

type Booking = {
  id: string
  code: string
  hostel_name: string
  room_type: string
  date: string
}

export const bookings: Booking[] = [
  {
    id: '728ed52f',
    code: '293315',
    hostel_name: 'ISH',
    room_type: '1 bed',
    date: '14/10/2024'
  },
  {
    id: '728edj9s',
    code: '144408',
    hostel_name: 'Pentagon',
    room_type: '2 beds',
    date: '28/11/2024'
  },
  {
    id: '720d952f',
    code: '293307',
    hostel_name: 'Boys Hill',
    room_type: '3 beds',
    date: '28/11/2024'
  },
  {
    id: '728ed10b',
    code: '234408',
    hostel_name: 'Mega Hill',
    room_type: '4 beds',
    date: '18/11/2024'
  }
]
