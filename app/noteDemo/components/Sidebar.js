// 侧边栏组件
// 这是一个服务端组件
import React, { Suspense } from "react";
import Link from "next/link";
import { getAllNotes } from "@/lib/redis";

import SidebarNoteList from "./SidebarNoteList";
import EditButton from "./EditButton";
import NoteListSkeleton from "./NoteListSkeleton";
import Image from "next/image";

export default async function Sidebar() {
  const notes = await getAllNotes();
  return (
    <>
      <section className="col sidebar">
        <Link href={"/noteDemo"} className="link--unstyled">
          <section className="sidebar-header">
            <Image
              className="logo"
              src="/logo.svg"
              width={22}
              height={20}
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="sidebar-menu" role="menubar">
          <EditButton noteId={null}>New</EditButton>
        </section>
        <nav>
          <Suspense fallback={<NoteListSkeleton />}>
            <SidebarNoteList />
          </Suspense>
        </nav>
      </section>
    </>
  );
}
