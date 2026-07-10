import { Template, defaultBuildLogger } from 'e2b'
import { template as nextJSTemplate } from './template'
import dotenv from 'dotenv'
dotenv.config()

Template.build(nextJSTemplate, 'c0-build', {
    cpuCount: 4,
    memoryMB: 4096,
    onBuildLogs: defaultBuildLogger(),
    apiKey: "e2b_72ae27a171c5a0137cbddb09842963dc1d4eb7aa"
})