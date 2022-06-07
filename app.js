const celtics = [
    {   
        id: 1,
        name: "Jayson Tatum",
        points: 0,
        fouls:0,
        turnovers:0
    },
    {
        id: 2,
        name: "Jaylen Brown",
        points: 0,
        fouls:0,
        turnovers:0
    },
    {
        id: 3,
        name: "Marcus Smart",
        points: 0,
        fouls:0,
        turnovers:0
    },
    {
        id: 4,
        name: "Al Horford",
        points: 0,
        fouls:0,
        turnovers:0
    },
    {
        id: 5,
        name: "Robert Williams",
        points: 0,
        fouls:0,
        turnovers:0
    },
    {
        id: 6,
        name: "Payton Pritchard",
        points: 0,
        fouls:0,
        turnovers:0
    },
    {
        id: 7,
        name: "Grant Williams",
        points: 0,
        fouls:0,
        turnovers:0
    },
    {
        id: 8,
        name: "Daniel Theis",
        points: 0,
        fouls:0,
        turnovers:0
    },
    {
        id: 9,
        name: "Derrick White",
        points: 0,
        fouls:0,
        turnovers:0
    },
    {
        id: 10,
        name: "Aaron Neismith",
        points: 0,
        fouls:0,
        turnovers:0    },
    {
        id: 11,
        name: "Nik Stauskas",
        points: 0,
        fouls:0,
        turnovers:0    },
    {
        id: 12,
        name: "Luke Kornet",
        points:0,
        fouls:0,
        turnovers:0    }
]

const warriors = [
    {
        id: 1,
        name: "Stephen Curry",
        points: 0,
        fouls:0,
        turnovers:0    },
    {
        id: 2,
        name: "Klay Thompson",
        points: 0,
        fouls:0,
        turnovers:0    },
    {
        id: 3,
        name: "Draymond Green",
        points:0, 
        fouls:0,
        turnovers:0    },
    {
        id: 4,
        name: "Jordan Poole",
        points: 0,
        fouls:0,
        turnovers:0    },
    {
        id: 5,
        name: "Andrew Wiggins",
        points: 0,
        fouls:0,
        turnovers:0    },
    {
        id: 6,
        name: "Kevon Looney",
        points: 0,
        fouls:0,
        turnovers:0    },
    {
        id: 7,
        name: "Andre Iguodala",
        points: 0,
        fouls:0,
        turnovers:0    },
    {
        id: 8,
        name: "Otto Porter Jr",
        points: 0,
        fouls:0,
        turnovers:0    },
    {
        id: 9,
        name: "Nemanja Bjelica",
        points:0,
        fouls:0,
        turnovers:0    },
    {
        id: 10,
        name: "Jonathan Kuminga",
        points:0,
        fouls:0,
        turnovers:0    },
    {
        id: 11,
        name: "Damion Lee",
        points:0, 
        fouls:0,
        turnovers:0    },
    {
        id: 12,
        name: "Gary Payton 2",       
        points: 0, 
        fouls:0,
        turnovers:0    }
]

let twoPointer = document.querySelector("#two-pt")
let threePointer = document.querySelector("#three-pt")
let freeThrow = document.querySelector("#free-throw")
let turnover = document.querySelector("#turnover")
let foul = document.querySelector("#foul")

twoPointer.addEventListener('click', ()=>{
    
        Swal.fire({
            title: `Who attempted a 2 pointer?`,
            html:`<div> 
            <button class="btn-players">Jayson Tatum</button>
            <button class="btn-players">Jaylen Brown</button>
            <button class="btn-players">Marcus Smart</button>
            <button class="btn-players">Al Horford</button>
            <button class="btn-players">Robert Williams</button>
            <button class="btn-players">Payton Pritchard</button>
            <button class="btn-players">Grant Williams</button>
            <button class="btn-players">Daniel Theis</button>
            <button class="btn-players">Derrick White</button>
            <button class="btn-players">Aaron Neismith</button>
            <button class="btn-players">Nik Stauskas</button>
            <button class="btn-players">Luke Kornet</button>
            </div>`,
        })

    Swal.fire({
        title: `Which team attempted a 2 pointer?`,
        html:`<div> 
        <button class="btn-bos">Boston Celtics</button>
        <button class="btn-gol">Golden State Warriors</button>`,
        showConfirmButton: false,
        if()
      })

    

    
    
})
