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
      <p class="mt-4 mb-20">
        A minimalistic, opinionated todo list application.
      </p>
      <Instruction left="p" right="New project" />
      <Instruction left="n" right="New quest in the current project" />
      <Instruction left="click on quest" right="Check off quest" />
      <Instruction left="h" right="Toggle help" />
      <Instruction left="c" right="Toggle configuration" />
      <Instruction left="v" right="Toggle view of quests" />
      <Instruction left="arrow up" right="Select previous project" />
      <Instruction left="arrow down" right="Select next project" />
      <p class="mt-20">
        You're already in the application, press <b>h</b> to close the help
        screen!
      </p>
    </div>
  );
};

export default Help;
