<template>
  <form>
    <legend>Color mode: {{ $colorMode.value }}</legend>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </form>
</template>
