"use client";

import React, {
  useState,
  PropsWithChildren,
  useRef,
  ReactElement,
  ReactNode,
} from "react";

export default function BackDropBlurPage({ children }: PropsWithChildren) {
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [activeComponent, setActiveComponent] =
    useState<React.ReactNode | null>(null);

  const handleStart =
    (component: React.ReactNode) =>
    (event: React.MouseEvent | React.TouchEvent) => {
      timeoutRef.current = setTimeout(() => {
        setActiveComponent(component);
        document.body.style.overflow = "hidden"; // 스크롤 방지

        // 터치 위치 기반으로 컨텍스트 메뉴 위치 설정
        if ("touches" in event) {
          setContextMenu({
            x: event.touches[0].clientX,
            y: event.touches[0].clientY,
          });
        } else {
          setContextMenu({ x: event.clientX, y: event.clientY });
        }
      }, 500);
    };

  const handleClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      setActiveComponent(null);
      document.body.style.overflow = "auto"; // 스크롤 복구
    }
  };

  return (
    <>
      {/* 길게 클릭할 대상 */}
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? React.cloneElement(child, {
              onMouseDown: handleStart(child),
              onTouchStart: handleStart(child),
            } as object)
          : child;
      })}

      {/* 모달 오버레이 */}
      {activeComponent && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleClose}
        >
          {activeComponent}

          {/* 컨텍스트 메뉴 (우측 하단) */}
          {/* {contextMenu && (
            <div
              className="absolute w-48 bg-white rounded-lg shadow-lg p-2 z-40"
              style={{
                top: `${contextMenu.y}px`,
                left: `${contextMenu.x}px`,
              }}
              onClick={(e) => e.stopPropagation()} // 메뉴 클릭 시 닫히지 않도록
            >
              <ul className="text-gray-800 text-sm">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  이미지 저장
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">복사</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  새 탭에서 열기
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Google 검색
                </li>
              </ul>
            </div>
          )} */}
        </div>
      )}
    </>
  );
}
