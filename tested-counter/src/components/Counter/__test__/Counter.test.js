import React from "react";
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "../Counter"

let getByTestId;

beforeEach(()=>{
  const component = render(<Counter/>);
  getByTestId = component.getByTestId;
})

test("Header should render correct content", ()=> {
    //const {getByTestId} = render(<Counter/>);
    const headerElement = getByTestId("header");

    expect(headerElement.textContent).toBe("My Counter")
});


test("Counter should have intial value of text 0", ()=>{
    //const {getByTestId} = render(<Counter/>)
    const initialCountValue = getByTestId("counter");

    expect(initialCountValue.textContent).toBe("0")
});


test("Should have input with initial value of 1", ()=>{
    //const {getByTestId} = render(<Counter/>)
    const inputElem = getByTestId("input");

    expect(inputElem.value).toBe("1")
});

test("Should have a button with + sign", ()=>{
    //const { getByTestId } = render(<Counter/>)
    const addBtn = getByTestId("add-btn");

    expect(addBtn.textContent).toBe("+")
});

test("Should have a button with - sign", ()=>{
    //const { getByTestId } = render(<Counter/>);
    const subtractBtn = getByTestId("subtr-btn")

    expect(subtractBtn.textContent).toBe("-")
});

test("Input can change with a different number entered", ()=>{
    //const {getByTestId} = render(<Counter/>);
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    expect(inputEl.value).toBe("5")
})


test("Can incriment by 1 when clicking on addBtn", ()=>{
    //const {getByTestId} = render(<Counter/>)
    const counterEl = getByTestId("counter");
    const addBtn = getByTestId("add-btn")
    fireEvent.click(addBtn)

    expect(counterEl.textContent).toBe("1")
})


test("Can incriment according to the number entered in the input", ()=>{
    //const {getByTestId} = render(<Counter/>)
    const addBtn = getByTestId("add-btn");
    const countEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addBtn)

    expect(countEl.textContent).toBe("5")
})


test("Can decrement the count by 1", ()=>{
    //const {getByTestId} = render(<Counter/>)
    const subtrBtn = getByTestId("subtr-btn")
    const countEl = getByTestId("counter")

    fireEvent.click(subtrBtn)

    expect(countEl.textContent).toBe("-1")

});

test("Can decrement according to the number entered in the input", ()=>{
   //const {getByTestId } = render(<Counter/>)
   const countEl = getByTestId("counter");
   const inputEl = getByTestId("input");
   const subtrBtn = getByTestId("subtr-btn");

   expect(countEl.textContent).toBe="0";

   fireEvent.change(inputEl, {
       target: {
           value: "5"
       }
   })

   fireEvent.click(subtrBtn)
   expect(countEl.textContent).toBe="-5"
})


test("Can decrement or incriment at once according to the number entered in the input", ()=>{
    //const {getByTestId } = render(<Counter/>)
    const countEl = getByTestId("counter");
    const inputEl = getByTestId("input");
    const subtrBtn = getByTestId("subtr-btn");
    const addBtn = getByTestId("add-btn")
    expect(countEl.textContent).toBe="0";
 
    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })
    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.click(subtrBtn)
    fireEvent.click(subtrBtn)
    fireEvent.click(subtrBtn)
    fireEvent.click(subtrBtn)
    expect(countEl.textContent).toBe="5"
 })


 test("Change counter color when is >=100 to green and to red when is <= -100", ()=>{
     //const { getByTestId } = render(<Counter/>)
     const addBtn = getByTestId("add-btn")
     const subtrBtn = getByTestId("subtr-btn");
     const counterEl = getByTestId("counter");
     const inputEl = getByTestId("input");

     expect(counterEl.className).toBe("");

     fireEvent.change(inputEl, {
         target: {
             value: "50"
         }
     })

     fireEvent.click(addBtn);
     expect(counterEl.className).toBe("")
     fireEvent.click(addBtn);
     expect(counterEl.className).toBe("green")
     fireEvent.click(addBtn);
     expect(counterEl.className).toBe("green")
     

     fireEvent.click(subtrBtn)
     expect(counterEl.className).toBe("green")
     fireEvent.click(subtrBtn)
     expect(counterEl.className).toBe("")
     fireEvent.click(subtrBtn)
     expect(counterEl.className).toBe("")
     fireEvent.click(subtrBtn)
     expect(counterEl.className).toBe("")
     fireEvent.click(subtrBtn)
     expect(counterEl.className).toBe("red")
 });