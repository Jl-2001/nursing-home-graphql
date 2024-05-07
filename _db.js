let homes = [
    {id: '1', title: 'new mercy', location: ['northfield']},
    {id: '2', title: 'st johns', location: ['lakeville', 'duluth']},
    {id: '3', title: 'brightstar care', location: ['northfield', 'lakeville', 'minneapolis']},
    {id: '4', title: 'cedar acres', location: ['duluth']},
    {id: '5', title: 'prairie care', location: ['northfield', 'minneapolis', 'duluth']},
  ]
  
  let residents = [
    {id: '1', name: 'marla', verified: true},
    {id: '2', name: 'cheryl', verified: false},
    {id: '3', name: 'debbie', verified: true},
  ]
  
  let reviews = [
    {id: '1', rating: 9, content: 'lorem ipsum', resident_id: '1', home_id: '2'},
    {id: '2', rating: 10, content: 'lorem ipsum', resident_id: '2', home_id: '1'},
    {id: '4', rating: 5, content: 'lorem ipsum', resident_id: '2', home_id: '4'},
    {id: '5', rating: 8, content: 'lorem ipsum', resident_id: '2', home_id: '5'},
    {id: '6', rating: 7, content: 'lorem ipsum', resident_id: '1', home_id: '2'},
    {id: '7', rating: 10, content: 'lorem ipsum', resident_id: '3', home_id: '1'},
    {id: '3', rating: 7, content: 'lorem ipsum', resident_id: '3', home_id: '3'},
  ]
  
  export default { homes, residents, reviews }