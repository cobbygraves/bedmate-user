export const hostelData = [
  {
    image_url:
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Elizabeth Seifert',
    rooms: [
      { name: '1 bed', price: 3175, capacity: 1 },
      { name: '2 beds', price: 2175, capacity: 2 },
      { name: '3 beds', price: 1175, capacity: 3 },
      { name: '4 beds', price: 1030, capacity: 4 }
    ],
    id: 1,
    rating: 4.5,
    capacity: 2,
    location: ' UCC - Behind the gateway library'
  },
  {
    id: 2,
    image_url:
      'https://images.unsplash.com/photo-1600077625345-f401f4ba2fde?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Pentagon',
    rooms: [
      { name: '1 bed', price: 3175, capacity: 1 },
      { name: '2 beds', price: 2175, capacity: 2 },
      { name: '3 beds', price: 1175, capacity: 3 }
    ],
    rating: 5,
    capacity: 1,
    location: 'Legon - Along the computer science department.'
  },
  {
    id: 3,
    image_url:
      'https://images.unsplash.com/photo-1531576788337-610fa9c67107?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Evandy',
    rooms: [
      { name: '2 beds', price: 2175, capacity: 2 },
      { name: '3 beds', price: 1175, capacity: 3 },
      { name: '4 beds', price: 1030, capacity: 4 }
    ],
    rating: 4,
    capacity: 2,
    location: 'Legon - Adjacent pentagon hostel.'
  },
  {
    id: 4,
    image_url:
      'https://images.unsplash.com/photo-1633893737773-af3bcb339e59?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Infinity International',
    rooms: [
      { name: '1 bed', price: 3175, capacity: 1 },
      { name: '2 beds', price: 2175, capacity: 2 },
      { name: '3 beds', price: 1175, capacity: 3 },
      { name: '4 beds', price: 1030, capacity: 4 }
    ],
    rating: 3.5,
    capacity: 1,
    location: 'TTU - Opposite cocoa board height.'
  },
  {
    id: 5,
    image_url:
      'https://images.unsplash.com/photo-1574716236621-87d2be17b3a3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Hillside',
    rooms: [
      { name: '1 bed', price: 3175, capacity: 1 },
      { name: '2 beds', price: 2175, capacity: 2 },
      { name: '4 beds', price: 1030, capacity: 4 }
    ],
    rating: 3,
    capacity: 3,
    location: 'KNUST - 300m from the central park.'
  }
]

export const campusList = [
  {
    name: 'UCC',
    label: 'University of Cape-Coast'
  },
  {
    name: 'UG',
    label: 'University of Ghana'
  },
  {
    name: 'TTU',
    label: 'Takoradi Technical University'
  },
  {
    name: 'KNUST',
    label: 'KNUST'
  },
  {
    name: 'Valley View University',
    label: 'Valley View University'
  },
  {
    name: 'Methodist University',
    label: 'Methodist University'
  }
]

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
  },
  {
    name: 'Self-Contained',
    label: 'Self-Contained'
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
    updated_at: '2024-10-19 15:35:43.000000',
    vehicle_id: {
      id: '8c198ba0-8a17-11ef-a064-3b699b6b5b73',
      reg_number: 'GY 5464-24'
    }
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
    updated_at: '2024-10-19 15:35:12.000000',
    vehicle_id: {
      id: '8c198ba0-8a17-11ef-a064-3b699b6b5b73',
      reg_number: 'GY 5403-24'
    }
  }
]
