from constgen.generators.common import Outputer, Constant, Enum


class JavascriptOutputer(Outputer):

    def __init__(self, *args, **kwargs):
        super().__init__(comment_mark="//", *args, **kwargs)

    def output_enum(self, enum : Enum):
        self._output.write(f"export const {enum.name} = {{\n")
        super().output_enum(enum, prefix=f"\t", assignment=":", suffix=",")
        self._output.write(f"}}\n")

    def output_constant(self, constant: Constant):
        return super().output_constant(constant, prefix="export const ")
