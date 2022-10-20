import React from "react";
import plus from "../Assets/plus.svg";

const OrderItem = (props) => {
  console.log(props.midi)
  return (
    <div className="w-full flex flex-col mt-3 px-4 space-y-3">
      <div className="w-full text-right">
        <h1 className="font-bold text-xl">{props.midi.name} </h1>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center space-x-4 ">
          <button className="border w-3  rounded-full">
            <img
              className="w-3 text-red-600 rounded-full "
              src={plus}
              alt="sad"
            />
          </button>
          <p>{props.midi.amount}</p>
          <svg
              className="w-3 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 14"
              fill="currentColor"
              role="button"
            >
              <path d="M2.66667 3.00456V2.33789C2.66667 1.23332 3.5621 0.337891 4.66667 0.337891H7.33333C8.4379 0.337891 9.33333 1.23332 9.33333 2.33789V3.00456H11.3333C11.7015 3.00456 12 3.30303 12 3.67122C12 4.03941 11.7015 4.33789 11.3333 4.33789H10.6667V11.6712C10.6667 12.7758 9.77124 13.6712 8.66667 13.6712H3.33333C2.22876 13.6712 1.33333 12.7758 1.33333 11.6712V4.33789H0.666667C0.298477 4.33789 0 4.03941 0 3.67122C0 3.30303 0.298477 3.00456 0.666667 3.00456H2.66667ZM4 3.00456H8V2.33789C8 1.9697 7.70152 1.67122 7.33333 1.67122H4.66667C4.29848 1.67122 4 1.9697 4 2.33789V3.00456ZM9.33333 4.33789H2.66667V11.6712C2.66667 12.0394 2.96514 12.3379 3.33333 12.3379H8.66667C9.03486 12.3379 9.33333 12.0394 9.33333 11.6712V4.33789ZM4 7.00456C4 6.63637 4.29848 6.33789 4.66667 6.33789C5.03486 6.33789 5.33333 6.63637 5.33333 7.00456V10.3379C5.33333 10.7061 5.03486 11.0046 4.66667 11.0046C4.29848 11.0046 4 10.7061 4 10.3379V7.00456ZM6.66667 7.00456C6.66667 6.63637 6.96514 6.33789 7.33333 6.33789C7.70152 6.33789 8 6.63637 8 7.00456V10.3379C8 10.7061 7.70152 11.0046 7.33333 11.0046C6.96514 11.0046 6.66667 10.7061 6.66667 10.3379V7.00456Z"></path>
            </svg>
        </div>

        <h1> {props.midi.price} </h1>
        {/* <div> 
                <div className='bg-white rounded-full border border-gray-600 shadow-lg w-6 h-6'><svg className='text-red-500 w-3 absolute inset-0.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="currentColor"><path d="M7 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H7V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H5V1C5 0.447715 5.44772 0 6 0C6.55228 0 7 0.447715 7 1V5Z"></path></svg></div>
            </div> */}
      </div>
      <hr />
    </div>
  );
};

export default OrderItem;
