#!/usr/bin/env node

import { readFileSync } from 'fs'
import { runInNewContext } from 'vm'

async function start() {
    let query = process.argv[2]
    let buffer = readFileSync(0)
    let content = buffer.toString('utf-8')

    let result = runInNewContext(`(${content})${query}`, {})

    console.log(result)
}

start()