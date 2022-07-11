import { Component } from 'solid-js';
import Logo from '../public/elephant.svg';

const Help: Component = () => {
  const Instruction = (props) => {
    return (
      <div class="flex flex-row justify-between mb-4">
        <p class="font-bold">{props.left}</p>
        <p class="italic">{props.right}</p>
      </div>
    );
  };

  return (
    <div class="max-w-md mt-12 mx-auto">
      <div class="flex flex-row gap-4 items-center">
        <Logo class="w-12 h-12" />
        <h1 class="text-2xl font-bold tracking-tight">rest.quest</h1>
      </div>
      <p class="mt-4">A minimalistic, opinionated todo list application.</p>
      <p class="mt-4 mb-10">
        You're already in the application, press <b>h</b> to toggle the help
        screen!
      </p>
      <Instruction left="p" right="New project" />
      <Instruction left="n" right="New quest in the current project" />
      <Instruction left="click on quest" right="Check off quest" />
      <Instruction left="h" right="Toggle help" />
      <Instruction left="c" right="Toggle configuration" />
      <Instruction left="v" right="Toggle view of quests" />
      <Instruction left="arrow up" right="Select previous project" />
      <Instruction left="arrow down" right="Select next project" />
      <Instruction left="b y e" right="Purge all local data" />
      <h2 class="text-xl font-semibold mt-12">S3 synchronization and backup</h2>
      <p class="mt-4">
        In the configuration of this app, you can add an endpoint and
        credentials for an S3 provider. <br />
      </p>
      <p class="mt-4 pb-10">
        If this is provided, the application will store the local state in the
        S3 bucket when gaining or losing focus.
      </p>
    </div>
  );
};

export default Help;
