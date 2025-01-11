'use client';

import { useState, useRef } from 'react';

const DragButton = () => {

    const initialItems = [
        { id: 1, backgroundColor: '#FF0000' },
        { id: 2, backgroundColor: '#FF0000' },
        { id: 3, backgroundColor: '#FF0000' },
        { id: 4, backgroundColor: '#FF0000' },
    ];

    const [items, setItems] = useState(initialItems);

    const handleMouseMove = (e: MouseEvent, id: number, buttonRef: any, containerRef: any) => {
        const updatedItems = [...items];
        const itemIndex = updatedItems.findIndex((item) => item.id === id);

        if (!buttonRef.current || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const buttonWidth = buttonRef.current.offsetWidth;

        let newLeft = e.clientX - containerRect.left - buttonWidth / 2;

        const maxLeft = containerRect.width - buttonWidth;
        newLeft = Math.max(0, Math.min(newLeft, maxLeft));

        buttonRef.current.style.left = `${newLeft}px`;

        const percentage = newLeft / maxLeft;
        updatedItems[itemIndex].backgroundColor = percentage > 0.5 ? '#8A226F' : '#FFFFFF';

        setItems(updatedItems);
    };

    return (
        <div className="space-y-6">

            <div>
                {items.map((item) => {
                    const buttonRef = useRef<HTMLDivElement>(null);
                    const containerRef = useRef<HTMLDivElement>(null);

                    return (



                        <div key={item.id} className="flex justify-between items-center gap-4 p-4">
                            {/* Logo Section */}
                            <div className="flex items-center gap-2">
                                <img
                                    src="/images/lady.png"
                                    alt="Uploaded preview"
                                    className="w-12 h-12 object-cover rounded-lg"
                                />
                                <p className="font-bold text-sm text-[14px]">logo.Img</p>
                            </div>

                            {/* Drag-and-Drop Section */}
                            <div
                                className="flex items-center gap-3"
                                onMouseMove={(e) =>
                                    handleMouseMove(e.nativeEvent, item.id, buttonRef, containerRef)
                                }
                                onMouseUp={() => setItems([...items])}
                            >

                                <div>
                                    <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">
                                        <line
                                            x1="0"
                                            y1="5"
                                            x2="20"
                                            y2="5"
                                            stroke="black"
                                            strokeWidth="2"
                                            strokeDasharray="4,4"
                                        />
                                    </svg>
                                </div>

                                {/* Draggable Button */}
                                <div
                                    ref={containerRef}
                                    className="relative w-16 h-8 rounded-full border border-gray-400"
                                    style={{ backgroundColor: item.backgroundColor }}
                                >
                                    <div
                                        ref={buttonRef}
                                        className="absolute w-8 h-8 bg-white rounded-full shadow-md cursor-grab active:cursor-grabbing"
                                        style={{ left: 0 }}
                                        onMouseDown={() => setItems([...items])}
                                    ></div>
                                </div>
                            </div>
                        </div>

                    );
                })}
            </div>
        </div>
    );
};

export default DragButton;
