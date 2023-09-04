import React from 'react'

function ContactFrom({onFormChange}) {
    const handleChange = (e) => {
        const {name, value} = e.target;
        onFormChange(name, value);
    };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <label className="text-[16px] font-figtree mb-2">Intagram Link<span className="text-[16px] font-figtree ml-1 text-slate-500 text-opacity-30">(Optional)</span></label>
          <input
            type='link'
            name='igLink'
            onChange={handleChange}
            className="h-[48px] border border-gray-300 border-opacity-30 rounded-lg px-3 placeholder-opacity-30 placeholder-slate-500 font-figtree font-thin text-[16px] outline-none"
            placeholder="Eg. ..instagram.com/username"
          ></input>
        </div>
        <div className="flex flex-col w-full mt-6">
        <label className="text-[16px] font-figtree mb-2">Youtube Link<span className="text-[16px] font-figtree ml-1 text-slate-500 text-opacity-30">(Optional)</span></label>
          <input
            type='link'
            name='ytLink'
            onChange={handleChange}
            className="h-[48px] border border-gray-300 border-opacity-30 rounded-lg px-3 placeholder-opacity-30 placeholder-slate-500 font-figtree font-thin text-[16px] outline-none"
            placeholder="Eg. ..youtebe/username"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default ContactFrom