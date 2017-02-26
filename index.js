'use strict';

function activation(x) {
    return x[0][0] >= 0.5 ? 1 : 0;
}

function multiply(a, b) {
    
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows

    for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols); // initialize the current row
        for (var c = 0; c < bNumCols; ++c) {
            m[r][c] = 0;             // initialize the current cell
            for (var i = 0; i < aNumCols; ++i) {
                m[r][c] += a[r][i] * b[i][c];
            }
        }
    }

    return m;
}



function predict(vodka, rain, friend) {
    // Every inner array represents a row
    var input = [ [vodka, rain, friend] ]; // Three on one matrix (three rows, one column)
    var weights_input_to_hidden_1 = [ [0.25] , [0.25], [0] ];
    var weights_input_to_hidden_2 = [ [0.5] , [-0.4], [0.9] ];

    var hidden_input_1 = multiply(input, weights_input_to_hidden_1);
    var hidden_input_2 = multiply(input, weights_input_to_hidden_2);
    console.log('>>> hidden_input_1: ', hidden_input_1);
    console.log('>>> hidden_input_2: ', hidden_input_2);

    var hidden_output_1 = activation(hidden_input_1);
    var hidden_output_2 = activation(hidden_input_2);
    console.log('hidden_outputs >>> ', hidden_output_1, hidden_output_2);

    var weights_hidden_to_outputs = [ [-1], [1] ];
    var output_input = multiply([[hidden_output_1, hidden_output_2]], weights_hidden_to_outputs);
    console.log('>>> output_input', output_input);

    var output_result = activation(output_input);
    console.log('output >>>', output_result);



    console.log(
        output_result > 0 ? 'GO ON PARTY!' : 'don\'t go'
    );
}

var vodka = 0, rain = 1, friend = 1;

predict(vodka, rain, friend);
