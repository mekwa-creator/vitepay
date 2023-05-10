'use strict';


const act1 ={
    user: 'Chimekwa nwakanma',
    movements: [1000, 2000, -4000, 2500, -800, -500, 10000, 4000],
    interestRate: 1.5,
    pin: 4965,
};

const act2 ={
    user: 'kemi juilet',
    movements: [50000, 15000, -10000, -4500, -2000, -18000, 70000, -6500],
    interestRate: 0.7,
    pin: 3333,
};

const act3 ={
    user: 'Faith Charles',
    movements: [10000, -200, -2000, 8000, -500, -500, -800, 40000],
    interestRate: 1.2,
    pin: 1111,
};

const act4 ={
    user: 'Chiwendu Elechi',
    movements: [7000, 20000, -400, -3000, -5000, 15000, -6000, -3000],
    interestRate: 1.1,
    pin: 2222,
};

const accounts = [act1,act2,act3,act4];

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance_value');
const labelSumIn = document.querySelector('.summary_value--in');
const labelSumOut = document.querySelector('.summary_value--out');
const labelSumInterest = document.querySelector('.summary_value--interest');
const labelTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login_btn');
const btnTransfer = document.querySelector('.form_btn--transfer');
const btnLoan = document.querySelector('.form_btn--loan');
const btnClose = document.querySelector('.form_btn--close');
const btnSort = document.querySelector('.btn--sort');
const inputLoginUsername = document.querySelector('.login_input--user');
const inputLoginpin = document.querySelector('.login_input--pin');
const inputTransferTO = document.querySelector('.form_input--to');
const inputTransferAmount = document.querySelector('.form_input--amount');
const inputLoanAmount = document.querySelector('.form_input--loan-amount');
const inputCloseUsername = document.querySelector('.form_input--user');
const inputClosepin = document.querySelector('.form_input--pin');



const displayMovements = function(movements){
    movements.forEach(function(mov, i){
        const type = mov > 0 ? 'deposit' : 'withrawal ';




        const html =`<div class="movements_row">
        <div class="movements_type movements_type--${type}"> ${i + 1} ${type}</div>
        <div class="movements_value">${mov}#</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin',html);

    });

};
displayMovements(act1.movements)

