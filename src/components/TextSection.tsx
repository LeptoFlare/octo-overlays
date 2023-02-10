import { css } from "@emotion/css"
import { Box, Button, TextField } from "@mui/material"

import Section from "./Section"
import { ReplicantReturnType } from "../hooks/useReplicant"

type TextSectionProps = {
  hook: ReplicantReturnType<string>
  label: string
}

export default ({ hook, label }: TextSectionProps) => {
  const handleChange = (newState: string) =>
    hook.updateState({ payload: newState })
  const handleClick = () => hook.replicateState()
  const isUpdated = () => hook.state === hook.replicant

  return (
    <Section>
      <Box
        className={css`
          display: flex;
          align-items: flex-end;
        `}
      >
        <TextField
          variant="standard"
          label={label}
          fullWidth
          value={hook.state}
          onChange={e => handleChange(e.target.value)}
        />
        <Box ml={1.5}>
          <Button
            color="primary"
            variant="contained"
            disabled={isUpdated()}
            onClick={handleClick}
          >
            {isUpdated() ? "Updated" : "Update"}
          </Button>
        </Box>
      </Box>
    </Section>
  )
}
