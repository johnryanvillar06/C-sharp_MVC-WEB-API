CREATE TABLE [dbo].[Movies] (
    [Id]          INT             IDENTITY (1, 1) NOT NULL,
    [Title]       NVARCHAR (100)  NOT NULL,
    [Genre]       NVARCHAR (50)   NOT NULL,
    [ReleaseDate] DATETIME        NOT NULL,
    [Price]       DECIMAL (19, 4) NOT NULL,
    CONSTRAINT [PK_Movies] PRIMARY KEY CLUSTERED ([Id] ASC)
);

