
const initialState = {
  events: [
    {
      name: 'Blood Test Requested',
      time: '12:30 PM',
      person: 'Dr. Bill Belichick'
    },
    {
      name: 'Blood Sample Collected',
      time: '1:45 PM',
      person: 'Nurse Gisele Bundchen'
    },
    {
      name: 'X-Rays Requested',
      time: '2:35 PM',
      person: 'Dr. Bill Belichick'
    },
    {
      name: 'Patient Delivered to Radiology',
      time: '3:30 PM',
      person: 'Srub Technician Tom Brady'
    },
    {
      name: 'Patient Returned to Room',
      time: '4:30 PM',
      person: 'Srub Technician Tom Brady'
    },
    {
      name: 'X Ray Results Collected',
      time: '5:30 PM',
      person: 'Nurse Gisele Bundchen'
    },
    {
      name: 'MRI Requested',
      time: '7:30 PM',
      person: 'Dr. Bill Belichick'
    }
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'NEW_EVENT':
      return changeEventList(state)
  }
  return state
}

function changeEventList(state) {
  const first = state.events.shift()
  state.events.push(first)
  return state
}
